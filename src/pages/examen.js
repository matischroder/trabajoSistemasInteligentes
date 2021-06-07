import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/examen.css'
import bsCustomFileInput from 'bs-custom-file-input';



class Examen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: null,
            localImg: null,
            isUploaded: false
        }
    }

    handleImage = e => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ img: e.target.result });
            };
            this.setState({
                localImg: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    doAnalize = () => {
        //postear a la api
        if (this.state.img !== null) {
            this.setState({ isUploaded: true})
        }
        else
            return(<alert>Debe cargar una imagen para analizara</alert>)
    }

    componentDidMount() {
        bsCustomFileInput.init()
    }

    render() {
        return (
            <>
                {this.state.isUploaded ? (
                    <div>
                        Imagen original, Imagen con efecto1,Imagen con efecto2
                    </div>
                ) :(
                    <div>
                    <div className = "importedImg">
                        <img src = {this.state.localImg} className="upload" alt=''></img>
                    </div >
                    <Form className="importFile">
                        <Form.File
                            id="custom-file"
                            label="Importar Imagen"
                            custom
                            onChange={this.handleImage}
                        />
                    </Form>
                    <Button className="confirm"
                            variant="success"
                            onClick={()=>this.doAnalize}
                    >
                Analizar
                </Button>
                </div >
                )}
                
            </>
        )
    }
}

export default Examen

