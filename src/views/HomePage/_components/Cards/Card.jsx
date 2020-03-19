import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import logo from "../../logo.svg";
export const Cards = props => {
  const header = <img alt="Card" src={logo} />;
  const footer = (
    <span>
      <Button label="edit" icon="pi pi-check" />
      {"    "}
      <Button label="delete" icon="pi pi-times" className="p-button-danger" />
    </span>
  );
  return (
    <>
      <Card
        title={props.title}
        subTitle="Subtitle"
        style={{ width: "360px" }}
        className="ui-card-shadow"
        footer={footer}
        header={header}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </div>
      </Card>
      <div>{props.name}</div>
      <Button>{props.buttonName}</Button>
    </>
  );
};
