import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

class Carousel extends React.Component {


    render() {
        const swpOpt = {
            startSlide: 2,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
        };
        var aToppic = this.props.data;
        // console.log('Carousel', data);
        var swipeList = aToppic.map((repo, index) => {
            var sImageurl = repo.imageurls[0].url;

            return (<div key={index}><img src={sImageurl}/><p><span>{repo.title}</span></p></div>);
        });

        return (
            <div className="swipe">
            <ReactSwipe className="swipe-wrap" swipeOptions={swpOpt}>
                {swipeList}
            </ReactSwipe>
            </div>

        );
    }
}

export default Carousel

// ReactDOM.render(
//     <Carousel />,
//     document.getElementById('app')
// );