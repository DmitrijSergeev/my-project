import { useEffect, useState } from 'react'

import { generateRandomString } from './../utils/utils'
import { Progressbar } from './Progressbar'

type ElementType = {
  age: number
  id: number
  name: string
}

const generateRows = (): ElementType[] => {
  return Array.from({ length: 5 }).map((_, i) => ({
    age: i,
    id: generateRandomString(8),
    name: 'Roma',
  }))
}

const useMockRequest = () => {
  return ({ page }: { page: number }): Promise<{ maxPage: number; rows: ElementType[] }> => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (page < 500) {
          const rows = generateRows()

          res({ maxPage: 500, rows })
        } else {
          rej({ message: 'Wrong' })
        }
      }, 1000)
    })
  }
}

export const TableApp = () => {
  const request = useMockRequest()
  const [rows, setRows] = useState<ElementType[]>([])

  useEffect(() => {
    const loadData = async () => {
      let countPage = 1
      let isDF = true

      while (isDF) {
        const data = await request({ page: countPage })

        if (data.maxPage === countPage) {
          isDF = false
        }
        countPage++
        setRows(prev => {
          return [...prev, ...data.rows]
        })
      }
    }

    loadData()
  }, [request])

  return (
    <div>
      <Progressbar />
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>page</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
