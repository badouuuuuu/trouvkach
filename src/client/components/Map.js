import React, {Component} from "react";
import axios from "axios";
import {
    Map,
    GoogleApiWrapper as googleApiWrapper,
    InfoWindow,
    Marker,
} from "google-maps-react";
import {log, formatWithOptions} from "util";

let center = {lat: "", lng: ""},
    zoom = 8;

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const error = err => {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
};
const success = pos => {
    center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
    };
};

navigator.geolocation.getCurrentPosition(success, error, options);

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false, // Hides or the shows the infoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
        terminals: [], // fetch all terminals
        loading: false,
    };

    componentDidMount() {
        axios.get(`/api/terminals`).then(res => {
            this.setState({
                terminals: res.data.terminals,
                loading: true,
            });
        });
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    render() {
        const mapStyles = {
            width: "95%",
            height: "75%",
            margin: "0 auto",
        };

        const renderMarkers = this.state.terminals
            .filter(item => item.address != null)
            .map(el => {
                return (
                    <Marker
                        key={el._id}
                        onClick={this.onMarkerClick}
                        name={el.address}
                        position={{lat: el.latitude, lng: el.longitude}}
                    />
                );
            });

        return (
            <>
                <Map
                    google={this.props.google}
                    zoom={zoom}
                    style={mapStyles}
                    initialCenter={center}>
                    <Marker onClick={this.onMarkerClick} name={"You're here"} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                    {this.state.loading && renderMarkers}
                </Map>
            </>
        );
    }
}

export default googleApiWrapper({
    apiKey: "AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o",
})(MapContainer);
