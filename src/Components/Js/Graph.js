import React from 'react'
import { VictoryChart, VictoryLine, VictoryContainer, VictoryTheme } from 'victory';

export default function Graph({gPoints}) {
    return (
        <>
          <VictoryChart height={400} width={400}
          containerComponent={<VictoryContainer responsive={false} />} 
          theme={VictoryTheme.material} > 
            <VictoryLine
              style={{
                data: {
                  stroke: "#c43a31",
                  strokeWidth: ({ data }) => data.length
                },
                labels: {
                  fontSize: 15,
                  fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
                }
              }}
              data={gPoints}
              labels={({ datum }) => datum.x}
            />
          </VictoryChart>
        </>
      )
}
