type GetEnvProps = {
  name: string
  value: string | null | undefined
  description?: string
  required?: boolean
}

export function getEnv(props: {
  name: string
  value: string | null | undefined
  required?: true
  description?: string
}): string
export function getEnv(props: {
  name: string
  value: string | null | undefined
  required: false
  description?: string
}): string | undefined

export function getEnv({
  name,
  required,
  value,
  description = "",
}: GetEnvProps) {
  if (required !== false && !value)
    throw Error(
      `"${name} ${description}" : is a required environment variable but not defined!`,
    )

  return value
}
