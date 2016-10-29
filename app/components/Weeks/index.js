import React from 'react';
import styles from './styles.css';
import Week from '../Week'

var dataJson = {
                "week1": {
                  "title": "Week 1",
                  "days": [
                  {            
                    "title": "Friday",
                    "goals": {
                      "weekly": [{
                        "title": "Meditate",
                        "endGoal": 2,
                        "completed": 1
                      },
                      {
                        "title": "Bath",
                        "endGoal": 2,
                        "completed": 1
                      }],
                      "daily": [{
                          "title": "Water",
                          "endGoal": 6,
                          "completed": 3
                        },
                        {
                          "title": "Stretch",
                          "endGoal": 1,
                          "completed": 1
                        }
                      ]}
                    },
                  {            
                    "title": "Saturday",
                    "goals": {
                      "weekly": [{
                        "title": "Meditate",
                        "endGoal": 5,
                        "completed": 1
                      },
                      {
                        "title": "Bath",
                        "endGoal": 2,
                        "completed": 1
                      }],
                      "daily": [{
                          "title": "Water",
                          "endGoal": 6,
                          "completed": 3
                        },
                        {
                          "title": "Stretch",
                          "endGoal": 1,
                          "completed": 1
                        }
                      ]}
                    }]
                  }
                }

class Weeks extends React.Component {
  render () {

    const { title, days } = dataJson.week1;

    return (
      <div>
        <Week title={title} days={days} />
      </div>
    );
  }
}

export default Weeks;
