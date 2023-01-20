//Dependencies
import {v4 as uuidv4} from 'uuid'

//Components
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from '@mui/material/AppBar';
import Divider from "@mui/material/Divider";


import TabPanel from './TabPanel';
import BasicMenu from './BasicMenu'
import BasicFormDialog from './BasicFormDialog';

//Hooks
import { useState } from "react";

function TabsL() {

    const [tabIndex, setTabIndex] = useState("Ninjas");
    const [isFormVisible,setFormVisibility] = useState(false);

    const tabs = [ "Ninjas","Clans", "Hokages"]

    const [data,setData] = useState({
        "Clans":[
            {
                name: 'Uchiha',
                descripcion: 'El Clan Uchiha (うちは一族, Uchiha Ichizoku) es uno de los cuatro clanes nobles de Konohagakure.[2] Fue considerado uno de los dos clanes más poderosos del mundo shinobi debido a su valioso Sharingan, junto con el Clan Senju, durante la Era de Guerra entre Clanes. Debido a sus grandes habilidades en todos los tipos de combates se ganaron el apodo de Clan de la Guerra (戦争の一族, Sensō no Ichizoku). '
                , img: 'https://alfabetajuega.com/hero/2018/10/alfabetajuega-naruto-clan-uchiha-01-061217.jpg?width=1200'
            },
            {
                name: 'Uzumaki',
                descripcion: 'El Clan Uzumaki (うずまき一族, Uzumaki Ichizoku) fue un prominente clan de Uzushiogakure. Actualmente el clan es reconocido como parte de Konohagakure, con la mayoría de sus miembros viviendo allí y siendo referidos como Familia Uzumaki (うずまき家, Uzumaki-ke).[1]',
                img: 'https://www.drakonball.com/wp-content/uploads/2021/11/clan-uzumaki.jpg'
            },
            {
                name: 'Hyuga',
                descripcion: 'El Clan Hyūga (日向一族, Hyūga Ichizoku) o Familia Hyūga (日向家, Hyūga-ke) es uno de los cuatro clanes nobles de Konohagakure.[1] Todos los miembros de este clan poseen desde el nacimiento su Kekkei Genkai, el Byakugan. ',
                img: 'https://cdn.shopify.com/s/files/1/0475/2116/9568/files/clan_hyuga_large.jpg?v=1599038179'
            }
        ],
        "Ninjas":[
            {
                name: 'Sasuke Uchiha',
                descripcion:"Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) es el deuteragonista de la serie y uno de los supervivientes del Clan Uchiha. Es hijo de Fugaku Uchiha y Mikoto Uchiha, hermano de Itachi Uchiha, así como la Reencarnación actual de Indra Ōtsutsuki. A pesar de crear relaciones con los miembros del Equipo Kakashi, Sasuke decidió desertar de Konohagakure en busca del poder necesario para vengar a su clan y asesinar a Itachi. Después de descubrir la verdad de su hermano, fundó Taka, fue un aliado temporal de Akatsuki y se convirtió en un criminal internacional. Después de hablar con Hashirama Senju decidió seguir el sueño de su hermano, colaborar con las Fuerzas Aliadas Shinobi y se colocó como meta realizar una revolución en el Mundo Shinobi."
                ,img: 'https://p4.wallpaperbetter.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg'
            },
            {
                name: 'Naruto Uzumaki',
                descripcion:'Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) es el protagonista de la serie del manga y anime Naruto y Naruto Shippūden. Asimismo es partícipe del manga y anime Boruto: Naruto Next Generations, secuela de la obra original de Masashi Kishimoto. Es residente de Konohagakure, hijo del Cuarto Hokage, Minato Namikaze y su esposa Kushina Uzumaki, además de ser la actual reencarnación de Asura Ōtsutsuki. ',
                img: 'https://www.teahub.io/photos/full/228-2280531_naruto-uzumaki-wallpaper-4k.jpg'
            },
            {
                name: 'Neji Hyuga',
                descripcion:'Neji Hyūga (日向ネジ, Hyūga Neji) fue un Jōnin de Konohagakure, miembro del Equipo Guy junto con sus compañeros Rock Lee y Tenten. Pertenecía al Clan Hyūga, uno de los más poderosos de Konoha por poseer uno de los tres famosos Dōjutsu, el Byakugan. Fue considerado uno de los ninjas más fuertes de su generación y era conocido por todos como: un genio. En la Cuarta Guerra Mundial Shinobi formó parte de la Segunda División. ',
                img: 'https://www.geekmi.news/__export/1635602456728/sites/debate/img/2021/10/30/naruto_neji_hyuga.jpg_423682103.jpg'
            }
        ],
        "Hokages":[]
    })

    const handleTabIndex = (event, index)=>{
        setTabIndex(index)
    }

    const handleFormVisibility = (event)=>{
        setFormVisibility(!isFormVisible)
        tabs.find((obj)=>{obj===String(event.target.textContent)?setTabIndex(obj):''})
    }

    return (
        <>
            <AppBar position="sticky" sx={{ mt: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: '6px 6px 0px 0px' }}>
                <Tabs indicatorColor="primary" textColor='inherit' value={tabIndex} onChange={handleTabIndex}>
                    {tabs.map((tab) => <Tab label={tab} value={tab} key={uuidv4()} />)}
                </Tabs>

                <Box sx={{ display: 'flex', }} display={'flex'}>
                    <Divider orientation="vertical" flexItem />
                    <BasicMenu tabs={tabs} handleFormVisibility={handleFormVisibility} />
                </Box>
            </AppBar>

            <Box sx={{ mt: 1 }}>
                {data && tabs.map((tab)=><TabPanel key={uuidv4()} value={tabIndex} index={tab} data={data[tab]} />)}
            </Box>

            <BasicFormDialog data={data} setData={setData} open={isFormVisible} tab={tabIndex} handleFormVisibility={handleFormVisibility} />

        </>
    )
}

export default TabsL;