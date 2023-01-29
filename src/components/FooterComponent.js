import React from 'react'

export const FooterComponent = () => {
  return (
    <div>
        <footer className = "my-footer container-fluid" style={{"padding": "10px"}}>
            <span>App Made by: 
              <strong>
                <a href='https://www.linkedin.com/in/taranjeet-dhingra-160943192/'  className="blink">Taranjeet
                </a>
              </strong> 
            </span>
        </footer>
    </div>
  )
}
