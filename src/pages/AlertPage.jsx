import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  UploadIcon,
} from 'lucide-react'

export function AlertPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Alert</h1>
        <p className="text-slate-600">Notification messages</p>
      </div>

      <div className="space-y-4">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>This is an informational alert.</AlertDescription>
        </Alert>

        <Alert>
          <AlertCircleIcon />
          <AlertTitle>YouTube would like you to send notifications</AlertTitle>
          <AlertDescription>
            Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
            <div className="flex justify-end gap-2 mt-4 w-full">
              <Button variant="link">Don't allow</Button>
              <Button>Allow</Button>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="info">
          <InfoIcon />
          <AlertTitle>Verify your email to activate your account</AlertTitle>
          <AlertDescription>
            We've sent a confirmation link to your inbox. Check your email to complete the sign-up.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CircleCheckIcon />
          <AlertTitle>File uploaded successfully</AlertTitle>
          <AlertDescription>Your document has been saved and is now available in your files.</AlertDescription>
        </Alert>

        <Alert variant="error">
          <CircleAlertIcon />
          <AlertTitle>Upload failed</AlertTitle>
          <AlertDescription>Something went wrong. Please try again or use a different file format.</AlertDescription>
        </Alert>

        <Alert variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>Only certain file types are allowed</AlertTitle>
          <AlertDescription>You can upload PDF, DOCX, JPG, or PNG files up to 20MB.</AlertDescription>
        </Alert>

        <Alert>
          <UploadIcon />
          <AlertTitle>Uploading your 'Img-234.png'</AlertTitle>
          <AlertDescription>
            Please wait while we are uploading your image.
            <div className="flex flex-col items-end w-full gap-y-4 mt-4">
              <Progress value={60} className="w-full" />
              <Button variant="link" className="-ml-4">
                Cancel
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
