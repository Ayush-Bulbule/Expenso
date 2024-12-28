import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'

const ExpenseBarGraph = () => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X-axis labels
        datasets: [
          {
            data: [50, 80, 90, 70, 100, 60, 40], // Y-axis data
            color: (opacity = 1) => `rgba(72, 130, 180, ${opacity})`, // Custom bar color
          },
        ],
      };

    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#ffffff',
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
        fillShadowGradient: '#4682B4', 
        fillShadowGradientOpacity: 1, 
        barPercentage: 0.5, 
        propsForBackgroundLines: {
            strokeWidth: 0.5,
            stroke: '#ddd', 
        },
    };


    return (
        <View className='flex items-center justify-center rounded-3xl mx-2 shadow-sm bg-slate-50'>
            {/* Add Bar graph here */}
            <BarChart
                yAxisSuffix='₹'
                style={{ flex: 1, marginTop: 20 }}
                data={data}
                width={Dimensions.get('window').width - 40}
                height={180}
                yAxisLabel={''}
                chartConfig={chartConfig}
            />

        </View>
    )
}

export default ExpenseBarGraph