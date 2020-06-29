import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'



const getCategories =  ( items )  => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    
    return categories
}


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,  //coffeeItems jest wyświtlana dlatego przy zmianie na inna kategorię
            
            categories: getCategories(props.items.edges)
        }
    }
    //funkcja do buttona, wybieranie kategorii

    handleItems =  category  => {
        let tempItems = [...this.state.items]
        if (category === "all") {
           this.setState(
               {coffeeItems: tempItems }
           )
        }
        else {
            let items = tempItems.filter(({node})=>node.category === category)
            this.setState(
                {coffeeItems: items}
            )
        }
    }

    


    render() {

        if(this.state.items.length>0){
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        { /* categories */ } 
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <button onClick={() => {
                                            this.handleItems(category)
                                        }} 
                                        key={index} 
                                        type="button"
                                        className="btn btn-yellow text-capitalize m-3">
                                            {category}
                                        </button>
                                    )
                                } )}
                            </div>
                        
                        </div>
                        { /* items */ } 
                        <div className="row">
                            {this.state.coffeeItems.map(( {node} ) => {
                                return (
                                <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                    <div>
                                        <Img fixed={node.image.fixed} />
                                    </div>
                                    {/* item text */}
                                    <div className="flex-grow-1 px-3"> 
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0"><small>{node.title}</small></h6>
                                            <h6 className="mb-0"><small>${node.price}</small></h6>
                                        
                                        </div>
                                        <p className="text-muted text-yellow">
                                            <small>{node.description.description}</small>
            
                                        </p>
                                    </div>
                                
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (<section className="menu py-5">
                <div className="container">
                    <Title title="best of our menu"/>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1>There are no items to display</h1>
                        </div>
                    </div>
                </div>
            </section>)
        }
       
    }
}
