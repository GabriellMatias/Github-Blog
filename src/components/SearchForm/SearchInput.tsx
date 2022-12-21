import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePostData } from '../../Hooks/usePostData'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchInputFormProps = z.infer<typeof searchFormSchema>

export function SearchInputForm() {
  const { loadPostData, FormattedPostData } = usePostData()
  const { register, handleSubmit } = useForm<SearchInputFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchInputFormProps) {
    await loadPostData(data.query)
  }

  return (
    <form
      action=""
      className="mt-[72px]"
      onSubmit={handleSubmit(handleSearchPosts)}
    >
      <div className="w-full mb-3 flex items-center justify-between">
        <h1 className="text-base-subtitle text-lg font-bold ">Publications</h1>
        <span className="text-base-span text-sm">
          {FormattedPostData.total_count} publications
        </span>
      </div>
      {/* olhar borda */}
      <input
        type="text"
        className="px-3 py-4 w-full bg-base-input rounded border border-base-border text-base-subtitle active:border-blue"
        placeholder="Search Content"
        {...register('query')}
      />
    </form>
  )
}
