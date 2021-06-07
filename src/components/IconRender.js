import React from 'react';
export function ListRender(props) {
    return (<i aria-label="View Change Icon" className="fas fa-list-ul fa-2x viewIcon" onClick={props.handleView}></i>);
  }
  export function GridRender(props) {
    return ( <i aria-label="View Change Icon" className="fas fa-grip-horizontal fa-2x viewIcon" onClick={props.handleView}></i>);
  }
const IconRender = (props) =>{
    const isList = props.isList;
    if(isList){
        return (<div className="iconRender">
      <GridRender handleView={props.handleView}  />
            </div>);
    }
    else return (
        <div className="iconRender">
       <ListRender handleView={props.handleView} />
        </div>
    );
}
export default IconRender;