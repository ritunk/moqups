import React, { useContext, useState } from "react";
import "./SeeProjects.css";
import Select from "react-select";
import { Link } from "react-router-dom";


const SeeProjects = () => {
  const [value, setValue] = useState(null);
  const options = [
    { value: "matched", label: <Link to='/matched' style={{textDecoration:'none'}}>Matched</Link>},
    { value: "submitted", label:  <Link to='/searched' style={{textDecoration:'none'}}>Submitted</Link> },
    { value: "closed", label: <Link to='/closed' style={{textDecoration:'none'}}>closed</Link>  },
    { value: "rejected", label: <Link to='/rejected' style={{textDecoration:'none'}}>Rejected</Link> },
  ];

  return (
    <div>
      
      <div className="content">
        <div className="leftc">
          <h1>4 kW Residential Rooftop Plant</h1>
          <p className="name">Arun Kumar Pandey</p>
          <p className="address">
            kanpur,Uttar Pradesh (34 km from service region)
          </p>
          <hr></hr>
        </div>
        <div className="rightc">
          <h4>Installation expected in 1 month</h4>
           <p>Shared on 3rd Aug 4:32 pm</p>
          <div className="drop">
            <Select
              options={options}
              defaultValue={value}
              onChange={setValue}
             
            />
           

          </div>
          <hr></hr>
        </div>
        
      </div>
      <div className="content">
        <div className="leftc">
          <h1>4 kW Residential Rooftop Plant</h1>
          <p className="name">Arun Kumar Pandey</p>
          <p className="address">
            kanpur,Uttar Pradesh (34 km from service region)
          </p>
          <hr></hr>
        </div>
        <div className="rightc">
          <h4>Installation expected in 1 month</h4>
           <p>Shared on 3rd Aug 4:32 pm</p>
          <div className="drop">
            <Select
              options={options}
              defaultValue={value}
              onChange={setValue}
            />
          </div>
          <hr></hr>
        </div>
        
      </div>
      <div className="content">
        <div className="leftc">
          <h1>4 kW Residential Rooftop Plant</h1>
          <p className="name">Arun Kumar Pandey</p>
          <p className="address">
            kanpur,Uttar Pradesh (34 km from service region)
          </p>
          <hr></hr>
        </div>
        <div className="rightc">
          <h4>Installation expected in 1 month</h4>
           <p>Shared on 3rd Aug 4:32 pm</p>
          <div className="drop">
            <Select
              options={options}
              defaultValue={value}
              onChange={setValue}
            />
          </div>
          <hr></hr>
        </div>
        
      </div>
    </div>
  );
};

export default SeeProjects;
