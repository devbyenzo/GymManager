import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-16
      "
    >
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        px-6
        md:grid-cols-4
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-black
            text-yellow-400
            "
          >
            GymManager
          </h2>

          <p
            className="
            mt-4
            text-zinc-400
            "
          >
            Sistema inteligente para academias que desejam crescer com
            tecnologia.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Links Rápidos</h3>

          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>
              <a href="#features" className="hover:text-yellow-400">
                Recursos
              </a>
            </li>
            <li>
              <a href="#dashboard" className="hover:text-yellow-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow-400">
                Planos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-yellow-400">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Empresa</h3>

          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>
              <Link to="/NotFound" className="hover:text-yellow-400">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/NotFound" className="hover:text-yellow-400">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/NotFound" className="hover:text-yellow-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Contato</h3>

          <div className="mt-4 flex gap-5">
            <a
              href="https://github.com/devbyenzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer text-zinc-400 transition hover:text-yellow-400" />
            </a>

            <a
              href="https://linkedin.com/in/devbyenzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-zinc-400 transition hover:text-yellow-400" />
            </a>
            <a
              href="mailto:enzwzz.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="cursor-pointer text-zinc-400 transition hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="
        mt-16
        border-t
        border-white/10
        pt-8
        text-center
        text-sm
        text-zinc-500
        "
      >
        © {new Date().getFullYear()} GymManager. Todos os direitos reservados.
      </div>
    </footer>
  );
}
