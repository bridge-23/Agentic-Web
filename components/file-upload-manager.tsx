import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Trash2 } from 'lucide-react'

export default function FileUploadManager() {
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles([...files, ...newFiles])
  }

  const handleUpload = () => {
    // Here you would typically send the files to your backend
    console.log("Uploading files:", files)
    // Reset the file list after upload
    setFiles([])
  }

  const handleDelete = (index) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="file-upload">Upload Files</Label>
        <Input id="file-upload" type="file" multiple onChange={handleFileChange} />
      </div>

      {files.length > 0 && (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{(file.size / 1024).toFixed(2)} KB</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(index)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button onClick={handleUpload} className="mt-4">
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </Button>
        </>
      )}
    </div>
  )
}

