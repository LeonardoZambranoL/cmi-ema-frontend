import { getContactEmail } from "@/lib/contact/utils";

type Props = {
  subject: string;
  body: string;
};

export default function MailTo({ subject, body }: Props) {
  const contactEmail = getContactEmail();
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return (
    <a
      href={`mailto:${contactEmail}?subject=${encodedSubject}&body=${encodedBody}`}
      className="font-semibold"
    >
      {contactEmail}
    </a>
  );
}
