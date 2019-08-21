// irmc
// ren
import React, {
    Component
} from 'react'



class SearchBar extends Component {
    state = {
        keyword: ''
    }

    onSubmitForm = (e) => {
        e.preventDefault()

        this.props.asd(this.state.keyword)

        
        
    }
    onChangeText = (e) => {
        // Menyimpan text dari user di state. keyword
        this.setState({
            keyword: e.target.value
        })
    }

    render() {
        return ( 
            <div className = "text-center mt-3" >
            <h3 > Search Image </h3> <form className = "form-goup mt-5"
            onSubmit = {
                this.onSubmitForm}>
            <input type = "text"
            onChange = {
                this.onChangeText
            } //pengganti document.getelement
            className = "form-control"
            placeholder = "Type Something..." / >
            </form>


            </div>
        )
    }
}

export default SearchBar
// onsubmit : ketika tag input didalam form di enter
// onchange:ketika ada perubahan di tag input text
// event.target.value adalah property berisi text yang kita ketik
// method = function dalam object
//  this.setState() merupakan func untuk merubah data pada state
// setState akan menerima satu buah parameter yaitu berupa objet()
// this. mengacu pada class yang dikerjakan
// function() secara otomatis running. manual trigger : var x= function
// membuat value dalam class gaperlu pakai var/let
// syntax axios= axios.get("",{}).then(()=>{}).catch(() => {})
// axios.get().then().catch()
    // then akan menerima function yang akan dijalankan jika berhasil melakukan request
        // (res) => {} res berisi repon dari database
    // catch akan menerima function jika gagal request
        // (err) => {} berisi pesan error