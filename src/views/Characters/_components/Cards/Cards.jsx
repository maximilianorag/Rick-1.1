// import React from "react";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import logo from "./logo.svg";
// export const Cards = props => {
//   const header = <img alt="Card" src={logo} />;
//   const footer = (
//     <span>
//       <Button label="edit" icon="pi pi-check" />
//       {"    "}
//       <Button label="delete" icon="pi pi-times" className="p-button-danger" />
//     </span>
//   );
//   return (
//     <>
//       <Card
//         title={props.title}
//         subTitle="Subtitle"
//         style={{ width: "360px" }}
//         className="ui-card-shadow"
//         footer={footer}
//         header={header}
//       >
//         <div>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
//           sed consequuntur error repudiandae numquam deserunt quisquam repellat
//           libero asperiores earum nam nobis, culpa ratione quam perferendis
//           esse, cupiditate neque quas!
//         </div>
//       </Card>
//       <div>{props.name}</div>
//     </>
//   );
// };

import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 350,
    height: 570,
    margin: "auto",
    borderRadius: 12,
    padding: 12
  },
  media: {
    borderRadius: 6
  }
}));

export const Cards = props => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: false });

  return (
    <>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={props.image}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            overline={props.origin ? props.origin : "ERROR"}
            heading={props.name}
            body={`the name of this Character is ${props.name}, and comes from ${props.origin}. His last location is ${props.location}. Status:${props.status}`}
          />
        </CardContent>
      </Card>
    </>
  );
};
