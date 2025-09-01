import Image from "next/image"

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components"
import { CheckCircleIcon } from "@/icons"
import { useToast } from "@/providers"

import DatePicker from "./DatePicker"

const ProfileSettings = () => {
  const { addToast } = useToast()
  return (
    <div className="flex flex-col gap-5">
      <Alert>
        <Image
          src={CheckCircleIcon}
          alt="Check Circle Icon"
          width={25}
          height={25}
          className="w-6 h-6"
        />
        <AlertTitle>Components used:</AlertTitle>
        <AlertDescription>
          Contains Select dropdown, Date Picker and also a button that calls for
          toast.
        </AlertDescription>
      </Alert>
      <h2>Profile Settings</h2>
      <div className="flex flex-col gap-1">
        <Label>Role</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem title="Admin">Admin</SelectItem>
            <SelectItem title="Editor">Editor</SelectItem>
            <SelectItem title="Viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DatePicker label="Birthday" />
      <Button
        variant="success"
        onClick={() => addToast("success", "Success", "Settings saved!")}
      >
        Save Changes
      </Button>
    </div>
  )
}

export default ProfileSettings
