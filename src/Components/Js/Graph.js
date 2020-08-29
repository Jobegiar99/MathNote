import React from 'react'
import { VictoryChart, VictoryLine, VictoryContainer, VictoryTheme } from 'victory';

export default function Graph({gPoints, xf}) {
    return (
        <>
          <VictoryChart height={400} width={400}
          containerComponent={<VictoryContainer responsive={false} />} 
          theme={VictoryTheme.material} > 
            <VictoryLine
              style={{
                data: {
                  stroke: "#c43a31",
                  strokeWidth: 5
                },
                labels: {
                  fontSize: 15,
                  fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
                }
              }}
              data={gPoints}
              labels={({ datum }) => datum.x}
              domain={{x:[0,50], y:[-19.5,23.5]}}
              interpolation="natural"
            />
          </VictoryChart>
        </>
      )
}
