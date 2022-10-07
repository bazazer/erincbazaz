import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IHalloweenStop } from './Data';

interface IProps {
    stops: IHalloweenStop[] | undefined;
}
const HalloweenContent: React.FC<IProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [stops, setStops] = React.useState<IHalloweenStop[]>();

    React.useEffect(() => {setStops(props.stops)});

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
console.log(props.stops);
    return ( <>
        <div>STOPS: </div>
        <div>{stops != undefined ? stops.map((stop) => {
          return (<>
            <Accordion expanded={expanded === 'panel' + stop.stopNumber} onChange={handleChange('panel' + stop.stopNumber)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {stop.neighbor.streetAddress}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{stop.neighbor.houseNickName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>)
        }) : null}


        </div>
        </>
    );
}
export default HalloweenContent;
