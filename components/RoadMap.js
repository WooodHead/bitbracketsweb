/* eslint-disable react/forbid-prop-types */
import React from 'react';

import PropTypes from 'prop-types';

import ScrollAnimation from 'react-animate-on-scroll';
import Typography from 'material-ui/Typography';
import { injectIntl, defineMessages } from 'react-intl';
import Paper from 'material-ui/Paper';


const messages = defineMessages({
  roadmapdate1: {
    id: 'roadmap.roadmapdate1',
    defaultMessage: 'June 2018',
    description: 'roadmap June 2018',
  },
  roadmapdate2: {
    id: 'roadmap.roadmapdate2',
    defaultMessage: 'September 2018',
    description: 'roadmap September 2018',
  },
  roadmapdate3: {
    id: 'roadmap.roadmapdate3',
    defaultMessage: 'March 2019',
    description: 'March 2019',
  },
  roadmaptext1: {
    id: 'roadmap.roadmaptext1',
    defaultMessage: 'Launch of Beta platform for World Cup pools in Rinkeby test net.',
    description: 'roadmap',
  },
  roadmaptext2: {
    id: 'roadmap.roadmaptext2',
    defaultMessage: 'Add support for NFL weekly pools.',
    description: 'roadmap',
  },
  roadmaptext3: {
    id: 'roadmap.roadmaptext3',
    defaultMessage: 'Launch in main net.',
    description: 'roadmap',
  },
  roadmaptext4: {
    id: 'roadmap.roadmaptext4',
    defaultMessage: 'Add support for Tennis Grand Slam tournaments.',
    description: 'roadmap',
  },
  roadmaptext5: {
    id: 'roadmap.roadmaptext5',
    defaultMessage: 'Add support for March Madness Bracket pools.',
    description: 'roadmap',
  },
  roadmaptext6: {
    id: 'roadmap.roadmaptext6',
    defaultMessage: 'Decentralize results using oraclize or prediction market contracts (Augur).',
    description: 'roadmap',
  },
  roadmaptext7: {
    id: 'roadmap.roadmaptext7',
    defaultMessage: 'Launch desktop client to allow building user customize tournaments/leagues and personalize pools.',
    description: 'roadmap',
  },

});
function RoadMap(props) {
  const { intl } = props;
  return (
    <div >

      <div className="timeline">

        <div className="container left">
          <ScrollAnimation animateIn="bounceInLeft">


            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
                  {intl.formatMessage(messages.roadmapdate1)}

                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext1)}
                </Typography>

              </div>


            </Paper>
          </ScrollAnimation>
        </div>


        <div className="container right">
          <ScrollAnimation animateIn="bounceInRight">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
                  {intl.formatMessage(messages.roadmapdate2)}
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext2)}
                </Typography>

              </div>

            </Paper>
          </ScrollAnimation>
        </div>
        <div className="container left">
          <ScrollAnimation animateIn="bounceInLeft">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
              2018 Q4
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext3)}
                </Typography>
              </div>

            </Paper>
          </ScrollAnimation>
        </div>
        <div className="container right">
          <ScrollAnimation animateIn="bounceInRight">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
              2018 Q4-2019 Q1
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext4)}
                </Typography>
              </div>

            </Paper>
          </ScrollAnimation>
        </div>
        <div className="container left">
          <ScrollAnimation animateIn="bounceInLeft">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
                  {intl.formatMessage(messages.roadmapdate3)}
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext5)}
                </Typography>
              </div>

            </Paper>
          </ScrollAnimation>
        </div>
        <div className="container right">
          <ScrollAnimation animateIn="bounceInRight">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
              2019 Q1/Q2
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext6)}
                </Typography>
              </div>

            </Paper>
          </ScrollAnimation>
        </div>
        <div className="container left">
          <ScrollAnimation animateIn="bounceInLeft">
            <Paper elevation={4}>

              <div className="content">
                <Typography variant="title" gutterBottom>
              2019 Q4
                </Typography>
                <Typography ariant="body1" gutterBottom>
                  {intl.formatMessage(messages.roadmaptext7)}
                </Typography>
              </div>

            </Paper>
          </ScrollAnimation>
        </div>
      
      </div>
      <style jsx>{`
   
      
   
     .timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 50px;
    }
    
    /* The actual timeline (the vertical ruler) */
    .timeline::after {
      content: " ";
        position: absolute;
        width: 6px;
        background-color: #fff;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .container {
        padding: 10px 40px;
        position: relative;
        background-color: ;
        width: 50%;
    }
    
    /* The circles on the timeline */
    .container::after {
      content: " ";
        position: absolute;
        width: 25px;
        height: 25px;
        right: -11px;
     
        background-color: #418BFF;
         border: 4px solid #418BFF;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }
    /* Place the container to the left */
.left {
    left: 0;
}

/* Place the container to the right */
.right {
    left: 50%;
}
.left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #f3f3f3;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #f3f3f3;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}
.right::after {
    left: -16px;
}

/* The actual content */
.content {
    padding: 20px 30px;
    background-color: #ffff;
    position: relative;
    border-radius: 6px;
}
@media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }
    .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }
      
      /* Make sure that all arrows are pointing leftwards */
      .container::before {
        left: 60px;
        border: medium solid #f3f3f3;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
    
      /* Make sure all circles are at the same spot */
      .left::after, .right::after {
        left: 15px;
      }
      
      /* Make all right containers behave like the left ones */
      .right {
        left: 0%;
      }
    
    `}</style>


      <hr />

    </div>


  );
}
RoadMap.propTypes = {

  intl: PropTypes.object.isRequired,

};

export default injectIntl(RoadMap);
