import React ,{useState, useRef,useEffect}from 'react'
import "./animation.css"
const Animation = () => {
    const pannelCheck = useRef()
    const pannels = useRef()

  useEffect(() => {
    const handleScroll = (event) => {
       panelSlideIn(); 
    };

    window.addEventListener('scroll', handleScroll);
    console.log("offset Height:",pannelCheck.current.offsetHeight)
    console.log("offset top",pannelCheck.current.offsetTop)
    console.log("window innerHeight",window.innerHeight)
    console.log("window scrollY",window.scrollY)
  }, []);

    const panelSlideIn = function() {
      
       
          const slideInAt = (window.scrollY + window.innerHeight) -  pannelCheck.current.offsetHeight / 4;
          const panelMidpoint = pannelCheck.current.offsetTop + pannelCheck.current.offsetHeight / 4;
          console.log("slideinat :",slideInAt,"pannelMidpoint: ", panelMidpoint)
          if (slideInAt > panelMidpoint) {
            pannelCheck.current.classList.add('panel-fade-in');
          }
 
      }
  return (
    <div> 
      <section className="panels" ref={pannels}>
        <div className="panel"ref={pannelCheck} >
         
          <div>
            <p>This is a happy place, little squirrels live here and play. Trees grow however makes them happy. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. We must be quiet, soft and gentle. Maybe there's a happy little waterfall happening over here.</p>
          </div>
        </div>
        
        <div className="panel" ref={pannelCheck}>
          <div>
            <p>With practice comes confidence. These things happen automatically. All you have to do is just let them happen. There are no mistakes. You can fix anything that happens. So often we avoid running water, and running water is a lot of fun.</p>
          </div>
          <div>
            <img alt="" src="https://images.unsplash.com/photo-1508721623045-872b68c1cb03?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=42deb20e5ee1ab100328560feeb85fa0"/>
          </div>
        </div>
        
        <div className="panel" ref={pannelCheck}>
          <div>
            <img alt="" src="https://images.unsplash.com/photo-1516010121015-cd1bf5995e93?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=925b6903115c1d9507dbb33819f64ebc"/>
          </div>
          <div>
            <p>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Learn when to stop. You can work and carry-on and put lots of little happy things in here. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. All you need is a dream in your heart, and an almighty knife. Do an almighty painting with us.</p>
          </div>
        </div>
        
        <div className="panel" >
          <div>
            <p>Volunteering your time; it pays you and your whole community fantastic dividends. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do.</p>
          </div>
          <div>
            <img alt="" src="https://images.unsplash.com/photo-1521624759875-6a7bf5489d9e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e45392c1348502b86001603488d19cd0"/>
          </div>
        </div>
      
      </section>
      </div> 
  )
}

export default Animation