import './technologies.css';

export default function Technologies() {
    return (
        <div id="technologies">
            <h1>the stack we provide</h1>
            <div className="vrLine"></div>
            <div className="technologiesBlock">
                <h3>Design</h3>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-8.jpg')} />

                    <span>figma</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-9.jpg')} />
                    <span>photoshop</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-11.jpg')} />

                    <span>illustrator</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-12.jpg')} />

                    <span>indesign</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-10.jpg')} />

                    <span>xd</span>
                </div>
            </div>
            <div className="vrLine"></div>
            <div className="technologiesBlock">
                <h3>Front-end</h3>
                <div className="technology">
                    <img src={require('../images/technologies/Icon.jpg')} />
                    <span>angular</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-1.jpg')} />
                    <span>react</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-2.jpg')} />
                    <span>next. js</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-3.jpg')} />
                    <span>vue</span>
                </div>
            </div>
            <div className="vrLine"></div>
            <div className="technologiesBlock">
                <h3>Back-end</h3>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-4.jpg')} />
                    <span>node</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-5.jpg')} />

                    <span>python</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-6.jpg')} />

                    <span>rails</span>
                </div>
                <div className="technology">
                    <img src={require('../images/technologies/Icon-7.jpg')} />

                    <span>django</span>
                </div>
            </div>
        </div>
    );
}
