import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Trash2, FileText } from 'lucide-react'

export default function TrainingDataManagement() {
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles([...files, ...newFiles])
  }

  const handleUpload = () => {
    console.log("Uploading files:", files)
    // Here you would typically send the files to your backend
    // Reset the file list after upload
    setFiles([])
  }

  const handleDelete = (index) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="file-upload">Upload Training Data</Label>
        <Input id="file-upload" type="file" multiple onChange={handleFileChange} accept=".txt,.csv,.json" />
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
                  <TableCell className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    {file.name}
                  </TableCell>
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

          <Button onClick={handleUpload}>
            <Upload className="w-4 h-4 mr-2" />
            Upload Training Data
          </Button>
        </>
      )}
    </div>
  )
}

