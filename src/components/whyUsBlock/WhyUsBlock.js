import './whyUsBlock.css';

export default function WhyUsBlock() {
    return (
        <div id="whyUsBlockWrapper">
            <h1>coersu — projects of any complexity</h1>
            <div className="mainBlock">
                <div className="secondBlock">
                    <img src={require('../images/hand-shake.png')} />

                    <p>our clients always come back once they worked with us</p>
                </div>
                <div className="secondBlock">
                    <img src={require('../images/hand-shake-1.png')} />

                    <p>
                        we always protect our clients data and take
                        responsibility for it
                    </p>
                </div>
                <div className="secondBlock">
                    <img src={require('../images/hand-shake-2.png')} />

                    <p>
                        ours clients can be sure that their project is made from
                        scratch for their particular needs
                    </p>
                </div>
                <div className="secondBlock">
                    <img src={require('../images/hand-shake-3.png')} />

                    <p>
                        we deliver projects as fast as possible whenever you
                        address us
                    </p>
                </div>
            </div>
        </div>
    );
}
