import React,{Component} from'react'

 class GoogleMap extends Component {

    componentDidMount(){
    
        const lat = this.props.lat;
        const lng = this.props.lng;

        var myLatLng={lat: lat, lng: lng};
        new google.maps.Map(document.getElementById("map"),{
            zoom: 12,
            center: myLatLng
            
        });
    }

    render() {
        return (
            <div id="map"/ >
            
    )
    }
}

export default GoogleMap;