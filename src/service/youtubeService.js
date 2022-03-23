
class Youtube {
    constructor(httpClient){
      this.youtube = httpClient
    }
    
    async mostPopular(pageToken){
      const response = await this.youtube.get('videos',{
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults : 30,
          regionCode: 'KR',
          pageToken : pageToken,
        }
      })
      return response.data;

    }
    async search(query){
      const response = await this.youtube.get('search',{
        params: {
          part: 'snippet',
          maxResults:30,
          type:'video',
          q: query      
        },
      });
      return response.data.items.map(item => ({...item, id:item.id.videoId}));
    }
}
export default Youtube;

