import React, { Component } from 'react'

const prefectures = ["Beyla", "Boffa", "Boké", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubréka", "Faranah", "Forécariah", "Fria", "Gaoual", "Guéckédou", "Kankan", "Kérouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labé", "Lélouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzérékoré", "Pita", "Siguiri", "Télimélé", "Tougué", "Yomou"]

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


export {Prefectures}