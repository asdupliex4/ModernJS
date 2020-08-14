class Github{
  constructor(){
    this.client_id = '060bb856ef113725791c'
    this.client_secret='b5b1659b00eee5ea5392cc1468a2eb37181eec13'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
  
    const profile = await profileResponse.json()
  
    return{
      // profile: profile
      profile
    }
  }
}