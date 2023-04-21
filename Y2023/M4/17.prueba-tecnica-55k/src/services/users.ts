const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api/?results=10&seed=lkfdsfas&page=${pageParam}`)
    .then(async (res) => {
      if (!res.ok) throw new Error('Ha ocurrido un error')
      return await res.json()
    })
    .then((res) => {
      const nextCursor = Number(res.info.page) + 1
      return { users: res.results, nextCursor }
    })
}

export default fetchUsers
