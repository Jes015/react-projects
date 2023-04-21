// React
import { useState, useMemo } from 'react'

// Types
import { SortBy as SortByType, type User } from '../types.d'

// Services
import fetchUsers from '../services/users'

// Tanstack
import { useInfiniteQuery } from '@tanstack/react-query'

const useApp = () => {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ users: User[], nextCursor: number }>(
    ['users'],
    fetchUsers,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false
    }
  )

  const users = data?.pages?.flatMap((page) => page.users) ?? []

  // Filters
  const [tableColorMode, setTableColorMode] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<SortByType>(SortByType.NONE)
  const [searchParam, setSearchParam] = useState<string>('')

  const foundUsers = useMemo(() => {
    return (searchParam !== '')
      ? [...users].filter((user) => {
          return user.location.country.toLowerCase().includes(searchParam.toLowerCase())
        })
      : users
  }, [users, searchParam])

  const filteredUsers = useMemo(() => {
    if (sortBy === SortByType.FIRSTNAME) return [...foundUsers].sort((a, b) => a.name.first.localeCompare(b.name.first))
    if (sortBy === SortByType.LASTNAME) return [...foundUsers].sort((a, b) => a.name.last.localeCompare(b.name.last))
    if (sortBy === SortByType.COUNTRY) return [...foundUsers].sort((a, b) => a.location.country.localeCompare(b.location.country))
    return foundUsers
  }, [foundUsers, sortBy])

  const resetUserList = async () => {
    await refetch()
  }

  // Table
  const toggleTableColorMode = () => {
    setTableColorMode(!tableColorMode)
  }

  // Filters
  const setSort = (sort: SortByType): void => {
    setSortBy(sort)
  }

  const handleSearchParams = (param: string) => {
    setSearchParam(param)
  }

  // Pagination
  const handlePagination = (): void => {
    fetchNextPage().catch(err => { console.log(err) })
  }

  return { hasNextPage, isLoading, isError, filteredUsers, tableColorMode, toggleTableColorMode, sortBy, setSort, resetUserList, setSearchParam, handleSearchParams, handlePagination }
}

export default useApp
