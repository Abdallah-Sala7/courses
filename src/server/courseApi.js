import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://courses-66zt.onrender.com'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCourseByCategory: builder.query({
      query:(category)=> category === 'all' ? '/courses' : `/courses?category=${category}`
    })
  })
})

export const {useGetCourseByCategoryQuery} = courseApi