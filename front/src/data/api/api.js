import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL = 'https://mxqsc4butj.execute-api.us-east-1.amazonaws.com/users'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  tagTypes: ['get'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '',
      providesTags: ['get'],
    }),
    addUser: builder.mutation({
      query: ({ first, last }) => ({
        url: '',
        method: 'POST',
        body: {
          name: first,
          surname: last,
        },
      }),
      invalidatesTags: ['get'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['get'],
    }),
    editUser: builder.mutation({
      query: ({ id, name, surname }) => ({
        url: id,
        method: 'PUT',
        body: {
          name,
          surname,
        },
      }),
      invalidatesTags: ['get'],
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
} = api
