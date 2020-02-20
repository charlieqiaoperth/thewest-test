import React from 'react';

class Test2 extends React.Component {

    render() {
        return (
            <div className="test2">
                <div className="row">
                    <div className="justify-content-start align-self-center align-items-start ">                              
                        <div className="test2-headline">
                            <h1>Annual Kings Park Festival</h1>
                        </div>
                        <div className="test2-source">
                            The West Australian
                        </div>
                        <div className="test2-publishDate">
                            {new Date("2018-09-01T01:00:00.000Z").toString("MM/dd/yyyy H:mm").slice(0,21)}
                        </div>
                        <div className="test2-content">
                            <p className="test2-content__text">
                                <em>Lorem ipsum</em> dolor sit amet, <strong>consectetur adipiscing elit</strong>.
                            </p>
                            <p className="test2-content__text">
                                Cum sociis natoque penatibus et magnis dis parturient
                                montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
                                sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                eros. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla
                                non metus auctor fringilla.
                            </p>
                            <div className="test2-content__img">
                                <img alt="Annual Kings Park Festival" src="https://images.thewest.com.au/publication/B88945448Z/1536132433649_GKR1Q2DJF.2-1.jpg" style={{width:"100%"}}></img>
                                <p className="test2-content__img__caption">Adorable Florables feature as part of the KingsPark Festival.</p>
                            </div>
                            <p className="test2-content__text">
                                Nulla vitae elit libero, a pharetra augue. Donec ullamcorper
                                nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet
                                fermentum.
                            </p>
                            <p className="test2-content__quote">
                                <a href="Purus Ipsum Aenean">Cum sociis natoque penatibus et magnis dis parturient
                                montes, nascetur ridiculus mus.
                                </a>
                            </p>
                            <p className="test2-content__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas
                                faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
                            </p>
                            <p className="test2-content__text">
                                Vestibulum id ligula porta felis euismod semper. Donec
                                ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque
                                ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo
                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer
                                posuere erat a ante venenatis dapibus posuere velit aliquet.
                            </p>
                        </div>                        
                    </div>
                </div>
            </div>            
        )
    }
}

export default Test2;