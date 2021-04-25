import { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import { nanoid } from 'nanoid'

import { Button, Spinner } from 'components'
import { SvgDelete } from 'assets'

import { S } from './AddItemsToStashModule.styles'

interface Props {
  handleAddItemToStash: (item: App.Item, index?: number) => void
  handleCloseDialog: () => void
}
export const AddItemsToStashModule = ({
  handleAddItemToStash,
  handleCloseDialog
}: Props) => {
  const [files, setFiles] = useState<ImageListType>([])
  const [loading, setLoading] = useState(false)

  function handleOnChange(uploadedFiles: ImageListType) {
    if (!!uploadedFiles.length) {
      setLoading(true)
    }

    // If we don't wrap this into a setTimeout somehow the thread gets locked
    // and setLoading doesn't execute util files are set
    setTimeout(() => setFiles(uploadedFiles))
  }

  function handleClickToUpload(hasItems: boolean, onImageUpload: () => void) {
    if (hasItems) {
      return void null
    } else {
      onImageUpload.call(globalThis)
    }
  }

  function handleOnContinue() {
    files.forEach(({ dataUrl }) => {
      handleAddItemToStash({ id: nanoid(), url: dataUrl })
    })

    handleCloseDialog.call(globalThis)
  }

  return (
    <S.Container>
      <S.Title>Add items</S.Title>
      <S.Upload.Wrapper>
        <S.Label>Upload from local storage</S.Label>
        <ImageUploading
          multiple
          value={files}
          onChange={handleOnChange}
          maxNumber={30}
          dataURLKey="dataUrl"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            isDragging,
            dragProps,
            errors
          }) => (
            <>
              <S.Upload.Container
                onClick={() => {
                  handleClickToUpload(!!imageList.length, onImageUpload)
                }}
                uploadLoading={loading}
                hasItems={!!imageList.length}
                isDragging={!!isDragging}
                uploadDidFail={!!errors}
                {...dragProps}
              >
                {imageList.map((image, index) => (
                  <S.Upload.Item.Container key={index}>
                    <S.Upload.Item.Image
                      src={image.dataUrl}
                      alt="thumbnail"
                      onLoad={() => setLoading(false)}
                    />
                  </S.Upload.Item.Container>
                ))}
                <S.Upload.Spinner>
                  <Spinner loading={loading} />
                </S.Upload.Spinner>
              </S.Upload.Container>
              <S.Upload.Button.Reset>
                <Button.Void
                  onClick={onImageRemoveAll}
                  iconSize="1.25em"
                  width="6em"
                >
                  Clear
                  <SvgDelete />
                </Button.Void>
              </S.Upload.Button.Reset>
            </>
          )}
        </ImageUploading>
        <S.Upload.Button.Continue>
          <Button.Filled
            disabled={!files.length}
            width="100%"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              handleOnContinue()
            }}
          >
            Continue
          </Button.Filled>
        </S.Upload.Button.Continue>
      </S.Upload.Wrapper>
    </S.Container>
  )
}
