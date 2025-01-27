const menus = {
    main: `
      outside [command] <options>
  
      today .............. show weather for today
      version ............ show package version
      help ............... show help menu for a command 
      forecast ........... show 10-day weather forecast`,
  
    today: `
      outside today <options>
  
      --location, -l ..... the location to use`,
    
      forecast: `
      outside forecast <options>
  
      --location, -l ..... the location to use`,
  }
  
  
  export default (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }
  