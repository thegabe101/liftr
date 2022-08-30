import React from "react";
import dumbellrow from '../../images/dumbellrow.gif';
import cablerow from '../../images/cablerow.webp';
import backextensions from '../../images/backextensions.gif';
import invertedrow from '../../images/invertedrow.webp';

export default function Back() {
    return (
        <div>
            <div className="tile">
                <img src={dumbellrow} />
                <div className="text">
                    <h1>Dumbell Row</h1>
                    <h2 className="animate-text">Another classic essential accessory movement.</h2>
                    <p className="animate-text">The dumbbell row doesn't require any fancy equipment, maybe just the weight and a bench. Great for building size in your upper back.</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=djKXLt7kv7Q</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>


            <div className="tile">
                <img src={cablerow} />
                <div className="text">
                    <h1>Cable Row</h1>
                    <h2 className="animate-text">Just one of a million row variations.</h2>
                    <p className="animate-text">Working with the cable row can provide a few benefits over its dumbbell counterpart. You can customize the grip width, and constant tension through the whole movement are two big ones!</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=GZbfZ033f74</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="tile">
                <img src={backextensions} />
                <div className="text">
                    <h1>Back Extensions</h1>
                    <h2 className="animate-text">Protect your lumbar!</h2>
                    <p className="animate-text">Back extensions are an often forgotten excercise, but incredibly efficient at creating stronger lower back muscles, even without weight loading.</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=ph3pddpKzzw</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="tile">
                <img src={invertedrow} />
                <div className="text">
                    <h1>Inverted Row</h1>
                    <h2 className="animate-text">More row variations...</h2>
                    <p className="animate-text">Sort of a cousin to the pull-up. If you're struggling with doing pull-ups, the inverted row is a great excercise that will help you get your first pull-up!</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=hXTc1mDnZCw</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}