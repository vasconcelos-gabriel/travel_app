type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: string
  full?: boolean
}

interface CampProps {
  backgroundImage: string
  title: string
  subtitle: string
  peopleJoined: string
}

type FeatureItem = {
  title: string
  icon: string
  description: string
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}
