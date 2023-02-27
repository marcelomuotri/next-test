export interface iParsedData {
    name: string
    description: string
    html_url: string
    updated_at: string
    created_at: string
    language: string
    topics: string[]
    score: number
    owner: {
      login: string
      avatar_url: string
    };
  }
export interface iParams {
  name?: string
  page?: number
}