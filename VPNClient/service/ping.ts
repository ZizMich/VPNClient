export const ping = async (config: string) => {
    const startTime = Date.now();
    const ip = parseIpFromConfig(config)
    try {
      const response = await fetch(ip);
      if (response.ok) {
        const endTime = Date.now();
        return(endTime - startTime);
      } else {
        const endTime = Date.now();
        return(endTime - startTime);
      }
    } catch{
      const endTime = Date.now();
      return(endTime - startTime);
    }
  };

function parseIpFromConfig(config:string) {
    const remoteIndex = config.indexOf('remote ');
    if (remoteIndex === -1) {
      throw new Error('No remote entry found in config');
    }
    const start = remoteIndex + 'remote '.length;
    const end = config.indexOf(' ', start);
    const ip = config.substring(start, end).trim();
    return ip;
  }
