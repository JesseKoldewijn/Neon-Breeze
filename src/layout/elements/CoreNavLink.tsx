import { children, onMount } from "solid-js"

type Props = {
  href: string
  children: any
}

const CoreNavLink = ({ href, children }: Props) => {
  // @ts-expect-error
  let _a

  const setActive = () => {
    const activeClasses = ["bg-foreground-300", "text-background-800", "border-foreground-300"]

    // @ts-expect-error
    if (!_a) return

    const pn = window.location.pathname
    const href = _a.href ? new URL(_a.href).pathname : "#"

    if (pn == href) {
      _a.classList.add(...activeClasses)
    }
  }

  onMount(() => {
    setActive()
  })

  return (
    <a
      ref={_a}
      href={href}
      data-link-active="false"
      class="w-24 rounded-md border px-2 py-1 text-center font-semibold transition-colors duration-500 ease-linear hover:border-foreground-300 hover:bg-foreground-300 hover:text-background-800"
    >
      {children}
    </a>
  )
}

export default CoreNavLink
