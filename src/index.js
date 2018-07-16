import React, { Component } from 'react'

import regions from './json/regions.json'

const prefectures = ["Beyla", "Boffa", "Boké", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubréka", "Faranah", "Forécariah", "Fria", "Gaoual", "Guéckédou", "Kankan", "Kérouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labé", "Lélouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzérékoré", "Pita", "Siguiri", "Télimélé", "Tougué", "Yomou"]
const sousprefectures = ["Boffa-Centre", "Colia","Doupro", "Koba-Tatema","Lisso", "Mankountan", "Tamita", "Tougnifili", "Bintimodiya", "Boke-Centre", "Dabiss", "Kamsar", "Kanfarande", "Kolaboui", "Malapouyah", "Sangaredi", "Sansale", "Tanene", "Baguinet", "Banguingny", "Fria-Centre", "Tormelin", "Foulamory", "Gaoual-Centre", "Kakony", "Koumbia", "Kounsitel", "Malanta", "Touba", "Wendou M'bour", "Guingan", "Kamaby", "Koundara-Centre", "Sambailo", "Sareboido","Termesse","Youkounkoun","Dixinn","Kaloum","Matam","Matoto","Ratoma","Arfamoussaya","Banko","Bissikrima","Dabola-centre","Dogomet","Kankama","Kindoye","Konindou","N'Dema","Banora","Dialakoro","Diatifere","Dinguiraye-centre","Gagnakali","Kalinko","Lansanya","Selouma","Banian","Beindou","Faranah-centre","Gnaleah","Heremakonon","Kobikoro","Maréla","Passayah","sandeniah","Songoyah","Tindo","Tiro","Albadariah","Banama","Bardou","Beindou","Fermesadou","Firawa (Yomadou)","Gbangbadou","kissidougou Centre","Koundiatou","Manfran","Sangardo","Yende-Millimou","Yombiro","Balandougou","Bate-nafadji","Boula","Gberedou-Baranama","Kankan-centre","Karifamoriyah","Koumban","Mamouroudou","Missamana","Moribayah","Sabadou-Baranama","Tinti-Oulen","Tokounou","Banankoro","Damaro","Kereouane centre","Komodou","Kounsankoro","Linko","Sibiribaro","Soromaya","Babila","Balato","Banfele","Baro","Cissela","Douako","Doura","Kiniero","Komola-Koura","Koumana","Kouroussa centre","Sanguiana","Balandougouba","Dialakoro","Faralako","Kantoumanina","Kinieran","Kondianakoro","Koundian","Mandiana-centre","Morodou","Niantania","Saladou","Sansando","Bankon","Doko","Franwalia","Kiniebakoura","Kintinian","Malea","Naboun","Niagassola","Niandankoro","Norassoba","Nounkounkan","Siguiri-centre","Siguirini","Coyah centre","Kouriya","Maneah","Wonkifong","Badi","Dubreka-centre","Falessade","Khorira","Ouassou","Tanene","Tondon","Alassoya","Benty","Farmoriah","Forecareah Centre","Kaback","Kakossa","Kallia","Maferenya","Moussaya","Sikhourou","Bangouyah","Damankanyah","Friguiagbe","Kindia centre","Kolente","Lynsan","Madina Oula","Mambiya","Molota","Samayah","Sougueta","Bourouwal","Daramagnaky","Gougoudje","Koba","Kollet","Konsotamy","Missira","Santou","Sarekaly","Sinta","Sogolon","Tarihoye","Telimele centre","Thionthian","Fafaya","Gadha Woundou","Koubia centre","Matakaou","Missira","Pilimini","Dalein","Daralabe","Diari","Dionfo","Garambe","Hafia","Kaalan","Kouramangui","Labé centre","Noussy","Popodara","Sannoun","Taranbaly","Tountouroun","Balaya","Djountou","Herico","Korbe","Lafou","Lelouma centre","Linsansaran","Manda","Parawol","Sagale","Tyanguel-Bori","Balaki","Donghol Sigon","Dougountouny","Fougou","Gayah","Hidayatou","Lebekere","Madina Wora","Mali centre","Salambande","Telire","Touba","Yembereng","Fatako","Fello Koundoua","Kansangui","Kolangui","Kollet","Konah","Kouratongo","Koyin","Tangaly","Tougue centre","Bodié","Dalaba centre","Ditinn","Kaalan","Kankalabe","Kebali","Koba","Mafara","Mitty","Mombeyah","Bouliwel","Dounet","Gongoret","Kegneko","Konkoure","Mamou centre","Nyagara","Oure Kaba","Poredaka","Saramoussaya","Soyah","Teguereya","Timbo","Tolo","Bantignel","Bourouwal Tappe","Dongol Touma","Gongore","Ley-Miro","Maci","Ninguelande","Pita centre","Sangareah","Sintaly","Timbi-Madina","Timbi-Touny","Beyla centre","Boola","Diarraguerela","Diassadou","Fouala","Gbackédou","Gbéssoba","karala","Koumandou","Mousadou","Nionsomoridou","Samana","Sinko","Sokourala","Bolodou","Fangamadou","Guéckédou centre","Guéndembou","Kassadou","Koundou","Nongoa","Ouendé Kénéma","Tékoulo","Terméssadou Djibo","Bossou","Foumbadou","Gama Berema","Guéassou","Kokota","Laine","Lola centre","N'Zoo","Tounkarata","Balizia","Binikala","Bofossou","Daro","Fassankoni","kouankan","Koyama","Macenta centre","N'Zébéla","Orémaï","Panziazou","Semgbédou","Sérédou","Vasérédou","Watanka","Bounouma","Gouécké","Kobéla","Koropara","Koulé","N'Zérékoré centre","Palé","Samoé","Soulouma","Womey","Yalenzou","Banié","Bheta","Bignamou","Bowé","Diécké","Péla","Yomou centre"]
const communes = ["Dixinn", "Kaloum", "Matam", "Matoto", "Ratoma"]
const quartiers = ["Almamya", "Béanzin", "Belle-vue école", "Belle-vue-marché", "Boulbinet", "Bonfi", "Bonfi-marché", "Boussoura", "Camayenne", "Cameroun", "Camp Alpha Yaya Diallo", "Carrière", "Citée de l'air", "Cobaya", "Coléah-centre", "Coléah-cité", "Coronthie", "Dabompa", "Dabondy 1", "Dabondy 2", "Dabondy 3", "Dabondyécole", "Dabondy-rails", "Dar-es-salam", "Dixinn-cité1", "Dixinn-cité 2", "Dixinn-gare", "Dixinn-gare-rails", "Dixinn-mosquée", "Dixinn-port", "Domino", "Fotoba", "Gbéssia-centre", "Gbéssia-cité 1", "Gbessia-cité 2", "Gbessia-cité 3", "Gbéssia-école", "Gbéssia-port 1", "Gbéssia-port 2", "Hafia 1", "Hafia 2", "Hafia-minière", "Hafia-mosquée", "Hamdalaye 1", "Hamdalaye 2", "Hamdalaye-mosquée", "Hermakönon", "Imprimerie", "Kaporo-centre", "Kaporo-rails", "Kassa", "Kénien", "Kipé", "Kissosso", "Koloma 1", "Koloma 2", "Kouléwondy", "Lambadji", "Landréah", "Lanséboudji", "Madina-centre", "Madina-cité", "Madina-école", "Madina-marché", "Madina-mosquée", "Mafanco", "Mafonco-centre", "Manquepas", "Matam", "Matam-lido", "Matoto-centre", "Matoto-marché", "Minière-cité", "Nongo", "Ratoma-centre", "Ratoma-dispensaire", "Sandervalia", "Sangoya-mosquée", "Sans-fil", "Simbaya 1", "Simbaya 2", "Simbaya-gare", "Sonfonia-gare", "Tanéné-marché", "Tanéné-mosquée", "Taouyah", "Témitaye", "Tombo", "Tombolia", "Touguiwondy", "Wanindara", "Yattayah", "Yimbaya-école", "Yimbaya-permanence", "Yimbaya-tannerie"]
//const regions = ["Conakry", "Boké", "Kindia", "Mamou", "Faranah", "Kankan", "Labé", "N'Zérékoré"]

class Prefectures extends Component {
        
    render() {
        return (
            <div className="col-md-3">
                <select  className="form-control selectpicker">
                    {
                        prefectures.map((prop) => {
                            return <option key={prop} value={prop}>{prop}</option>
                        })
                    }
            
                </select>
            </div>
        )
    }
}

class Communes extends Component {
    render() {
        return(
            <div className="col-md-3">
                <select  className="form-control selectpicker">
                    {
                        communes.map((prop) => {
                            return <option key={prop} value={prop}>{prop}</option>
                        })
                    }
            
                </select>
            </div>
        )
    }
}

class Quartiers extends Component {
    render() {
        return(
            <div className="col-md-3">
                <select  className="form-control selectpicker">
                    {
                        quartiers.map((prop) => {
                            return <option key={prop} value={prop}>{prop}</option>
                        })
                    }
            
                </select>
            </div>
        )
    }
}

class Regions extends Component {
    render() {
        return(
            <div className="col-md-3">
                <select  className="form-control selectpicker">
                    {
                        regions.map((prop, key) => {
                            return <option key={key} value={prop.region}>{prop.region}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

class Sousprefectures extends Component {
    render() {
        return(
            <div className="col-md-3">
                <select  className="form-control selectpicker">
                    {
                        sousprefectures.map((prop) => {
                            return <option key={prop} value={prop}>{prop}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}


export {Prefectures, Communes, Quartiers, Regions, Sousprefectures}