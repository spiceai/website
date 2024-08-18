import { Dispatch, SetStateAction } from 'react'

import { ResponseData } from './playground-options'
import { Dialog, DialogContent } from 'components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'components/ui/table'

export const PlaygroundTable = ({
  data,
  isOpenTable,
  setIsOpenTable
}: {
  data: ResponseData
  isOpenTable: boolean
  setIsOpenTable: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <div className='relative h-40 max-w-xl overflow-hidden'>
        <TableData data={data} />
        <Shadows />
      </div>
      <Dialog open={isOpenTable} onOpenChange={setIsOpenTable} modal={false}>
        <DialogContent className='w-full max-w-4xl' onOpenAutoFocus={(e) => e.preventDefault()}>
          <Table className='w-full text-sm'>{data.schema && <TableData data={data} />}</Table>
        </DialogContent>
      </Dialog>
    </>
  )
}

const TableData = ({ data }: { data: ResponseData }) => {
  return (
    <Table className='w-full text-sm'>
      <TableHeader>
        <TableRow>
          {data.schema.map((column, index) => (
            <TableHead key={index} className='px-2 text-left font-bold'>
              {column.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} className='odd:bg-neutral-50/70'>
            {data.schema.map((column, columnIndex) => (
              <TableCell key={columnIndex} className='px-2 py-2'>
                <span className='block max-w-10 truncate md:max-w-40'>{row[column.name]}</span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const Shadows = () => {
  return (
    <>
      <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral' />
      <div className='absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-neutral/60' />

      <div className='absolute top-0 h-full w-20 bg-gradient-to-r from-neutral' />
      <div className='absolute top-0 h-full w-20 bg-gradient-to-r from-neutral' />

      <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral' />
      <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral' />
    </>
  )
}
