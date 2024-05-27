# API
https://openweathermap.org/api

# DOC
https://zh-hans.react.dev/learn/thinking-in-react

# 步骤一：将 UI 拆解为组件层级结构

 App
    - WeatherCard
        - CurrentCity 
            - Date
            - Name
            - Temperature
            - TemperatureRange
            - WeatherIcon
            - Meta
                - Humidity
                - Wind
                - AirQuality
                - Somatosensory
        - Forecast
            - DayOfWeek[]
                - Name
                - Date
                - WeatherIcon
                - TemperatureRange
        - SearchBar
            - Input
            - Button
        - OtherCities
            - City[]
                - WeatherIcon
                - Name
                - TemperatureRange
      

相同名称的组件
在按照责任划分组件的时候， 出现重名， 有可能是一个通用组建
eg: temperature/ weatherIcon/

步骤二：使用 React 构建一个静态版本

https://tailwindcss.com/

rafce
快速创建react component 