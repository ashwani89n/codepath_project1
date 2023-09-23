import react from 'react';
import Tile from './Tile';

function TileLayout(){
    return (<>
    <table class="tileHeading" align='center'>
        <tr>
            <td>Tourism in Atlanta</td>
        </tr>
    </table>
    <table class="tileLayout" align='center'>
            <tbody>
                <tr>
                    <Tile imgName='Aquarium.jpg' locationName='Georgia Aquarium' location='Pemberton Place' link='https:////www.georgiaaquarium.org'></Tile>
                    <td></td>
                    <Tile imgName='piedmont.jpg' locationName='Piedmont Park' location='1071 Piedmont Ave' link='https://piedmontpark.org'></Tile>
                    <td></td>
                    <Tile imgName='olympic.jpg' locationName='Olympic Park' location='Downtown Atlanta' link='https://www.gwcca.org/centennial-olympic-park'></Tile>
                </tr>
                <tr></tr>
                <tr>
                    <Tile imgName='colocola.webp' locationName='World of Coca-Cola' location='Downtown Atlanta' link='https://www.worldofcoca-cola.com/'></Tile>
                    <td></td>
                    <Tile imgName='museum.jpg' locationName='High Museum of Art' location='The Woodruff Arts Center' link='https://high.org/'></Tile>
                    <td></td>
                    <Tile imgName='fox.jpg' locationName='Fox Theatre' location='Peachtree St NE' link='https://www.foxtheatre.org/'></Tile>
                </tr>
                <tr></tr>
                <tr>
                    <Tile imgName='botanical.jpg' locationName='Botanical Garden' location='Midtown Atlanta' link='https://www.atlantabg.org/'></Tile>
                    <td></td>
                    <Tile imgName='mountain.jpg' locationName='Stone Mountain Park' location='Stone Mountain' link='https://stonemountainpark.com/'></Tile>
                    <td></td>
                    <Tile imgName='history.jpg' locationName='Atlanta History Center' location='W Paces Ferry Rd NW' link='https://www.atlantahistorycenter.com/'></Tile>
                </tr>
                <tr></tr>
                <tr>
                    <Tile imgName='zoo.png' locationName='Zoo Atlanta' location='Grant Park' link='https://zooatlanta.org/'></Tile>
                    <td></td>
                    <Tile></Tile>
                    <td></td>
                    <Tile></Tile>
                </tr>
            </tbody>
        </table></>);
}


export default TileLayout;

