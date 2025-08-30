import { NavTranslation } from './nav.interface';
import { HeroTranslation } from './hero.interface';
import { AboutTranslation } from './about.interface';
import { ExperienceTranslation } from './experience.interface';
import { SkillsTranslation } from './skills.interface';
import { ProjectsTranslation } from './projects.interface';
import { ProductsTranslation } from './products.interface';
import { ContactTranslation } from './contact.interface';
import { FooterTranslation } from './footer.interface';
import { ServicesTranslation } from './services.interface';

export interface Translation {
  nav: NavTranslation;
  hero: HeroTranslation;
  about: AboutTranslation;
  experience: ExperienceTranslation;
  skills: SkillsTranslation;
  projects: ProjectsTranslation;
  products: ProductsTranslation;
  services: ServicesTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}