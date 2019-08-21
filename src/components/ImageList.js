// irmc
// ren
import React, { Component } from 'react'

class ImageList extends Component{
    renderList = () => {
        // this.props.data = array of objects. ketika array di map, yang masuk adalah objeknya sendiri kedalam prop item. AOO.map adalah fungsi yang menerima suatu fungsi dimana objectnya dimasukan kedalahm property dengan nama item
        //item = {}
        // hasil = []
        let hasil = this.props.data.map((item, index) => { //fungsi map gunanya untuk mengubah bentuk suatu data
        return (
        <img 
        className = 'm-3'
        src={item.urls.regular}
        key={index}
        />
        ) // elemen yang dimasukan kedalam array hasil
        })
        return hasil
        
    }

    render() {
        //asalnya dari file yang sama. klo beda jd this.props.renderlist()

        return (
            <div>
                <h1>Search Result</h1>
                Jumlah data : {this.props.data.length}
                {this.renderList()}
            </div>
        )
    }
}

export default ImageList

// this.props.data = array of objects [{},{},..]