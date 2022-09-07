import React ,{ useState, useEffect }from 'react'
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import axios from "axios"



function Traductor() {
    let [textoEntrante,setEntrante]=useState("")
    let [claveIdioma,setIdiomaE]=useState("")
    let [idiomas,setIdiomas]=useState([])
    let [claveIdiomaS,setIdiomaSel]=useState("")
    let [textoSaliente,setResultado]=useState("")
    const ObtenerFuenteIdioma= ()=>{
        axios.post(`https://libretranslate.de/detect`,{
            q: textoEntrante
        }).then((respuesta)=>{
            setIdiomaE(respuesta.data[0].language)
        })
    }
    useEffect(()=>{
        axios.get(`https://libretranslate.de/languages`)
        .then((res)=>{
            setIdiomas(res.data)
        })
        ObtenerFuenteIdioma()
    },[textoEntrante])
    const claveI=(e)=>{
        setIdiomaSel(e.target.value)
    }
    const traducirT=()=>{
        ObtenerFuenteIdioma()
        let data={
            q: textoEntrante,
            source:claveIdioma,
            target:claveIdiomaS,
        }
        axios.post(`https://libretranslate.de/translate`,data)
        .then((res)=>{
            setResultado(res.data.translatedText)
        })
    }


  return (
    <div className= "container">
        <div className= "app-header">
            <h2 className= "header">Traductor de texto</h2>
        </div>
        <div className= "app-body">
            <div>
                <Form>
                    <Form.Field
                        control= {TextArea}
                        placeholder="Escribe el texto a traducir..."
                        onChange={(e)=>setEntrante(e.target.value)}
                    />
                    <select className= "select-idioma" onChange={(e)=>claveI(e)}>
                        <option> Porfavor ingresa un idioma...</option>
                        {idiomas.map((i)=>{
                            return(
                                <option key={i.code} value={i.code}>{i.name}</option>
                            )
                        })}
                    </select>
                    <Form.Field
                        control={TextArea}
                        placeholder= "Resultado..."
                        value={textoSaliente}
                    />
                    <Button
                        color="teal"
                        size="large"
                        onClick={traducirT}
                    ><Icon name='translate' />Traducir</Button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Traductor