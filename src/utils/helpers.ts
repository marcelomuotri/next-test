import { iParams } from "../interfaces/interfaces"

export async function getServerSideProps(params : iParams) {
    const {name, page} = params
    const per_page = 6
    const response = await fetch(`https://api.github.com/search/repositories?q=${name}&page=${page}&per_page=${per_page}`)
    const data = await response.json()
    return {
      props: {
        data
      }
    }
  }